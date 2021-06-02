export default appReducer
export const initialState = {
  bugList: undefined,
  peopleList: undefined,
  userList: undefined,
  staffList: undefined,
  selectedBug: undefined,
  selectedPerson: undefined
}

function appReducer(state, action) {
  console.log(action)

  switch (action.type) {
    case 'RESET':
      return initialState

    case 'SET_BUG':
      const { selectedBug } = action
      return {
        ...state,
        selectedBug
      }

    case 'SET_PERSON':
      const { selectedPerson } = action
      return {
        ...state,
        selectedPerson
      }

    case 'LOAD_PEOPLE':
      const { peopleList } = action
      return {
        ...state,
        ...loadPeople(peopleList)
      }

    case 'LOAD_BUGS':
      const { bugList } = action
      return {
        ...state,
        ...loadBug(bugList)
      }

    case 'ADD_USER':
      const { user } = action
      return {
        ...state,
        ...addUser(state, user)
      }

    case 'ADD_STAFF':
      const { staff } = action
      return {
        ...state,
        ...addStaff(state, staff)
      }

    case 'UPDATE_PERSON':
      const { newInfo } = action
      return {
        ...state,
        ...updatePerson(state, newInfo)
      }

    case 'DELETE_PERSON':
      return {
        ...state,
        ...deletePerson(state)
      }

    case 'ADD_BUG':
      const { bug } = action
      return {
        ...state,
        ...addBug(state, bug)
      }

    case 'UPDATE_BUG':
      const { update, staffID } = action
      return {
        ...state,
        ...updateBug(state, update, staffID)
      }

    case 'KILL_BUG':
      return {
        ...state,
        ...killBug(state)
      }

    default:
      throw new Error(`Action type '${action.type}' is not recognizable`)
  }
}

function loadPeople(peopleList) {
  const userList = []
  const staffList = []
  peopleList.forEach((person) => {
    if (person.role === 'staff') {
      staffList.push(person)
    }
    if (person.role === 'user') {
      userList.push(person)
    }
  })
  return {
    peopleList,
    userList,
    staffList,
    selectedPerson: userList[0] ?? staffList[0]
  }
}

function loadBug(bugList) {
  return {
    bugList,
    selectedBug: bugList[0]
  }
}

function addBug({ bugList }, bug) {
  return {
    bugList: bugList.concat(bug),
    selectedBug: bug
  }
}

function addUser({ peopleList, userList }, user) {
  user.role = 'user'
  return {
    peopleList: peopleList.concat(user),
    userList: userList.concat(user),
    selectedPerson: user
  }
}

function addStaff({ peopleList, staffList }, staff) {
  staff.role = 'staff'
  return {
    peopleList: peopleList.concat(staff),
    staffList: staffList.concat(staff),
    selectedPerson: staff
  }
}

function updateBug({ bugList, selectedBug }, update, staffID) {
  if (staffID) {
    selectedBug.staffID = staffID
  }
  const updatedBug = {
    ...selectedBug,
    updates: [
      ...selectedBug.updates,
      update
    ]
  }
  return {
    bugList: [
      updatedBug,
      ...bugList.filter(bug => bug.id !== selectedBug.id)
    ],
    selectedBug: updatedBug
  }
}

function killBug({ bugList, selectedBug }) {
  const newBugList = bugList.filter(bug => bug.id !== selectedBug.id)
  return {
    bugList: newBugList,
    selectedBug: newBugList?.[0]
  }
}

function updatePerson({ peopleList, userList, staffList, selectedPerson }, newInfo) {
  const _person = {
    ...selectedPerson,
    ...newInfo
  }
  const _people_list = [
    _person,
    ...peopleList.filter(person => person.id !== _person.id)
  ]
  const _userList = userList.filter(user => user.id !== _person.id)
  const _staffList = staffList.filter(staff => staff.id !== _person.id)

  if (_person.role === 'user') {
    _userList.unshift(_person)
  }
  if (_person.role === 'staff') {
    _staffList.unshift(_person)
  }

  return {
    selectedPerson: _person,
    peopleList: _people_list,
    userList: _userList,
    staffList: _staffList
  }
}

function deletePerson({ bugList, peopleList, userList, staffList, selectedPerson }) {
  const newBugList = bugList.filter(bug => (bug.userID !== selectedPerson.id && bug.staffID !== selectedPerson.id))
  const newPeopleList = peopleList.filter(person => person.id !== selectedPerson.id)
  const newUserList = (selectedPerson.role === 'user')
    ? userList.filter(user => user.id !== selectedPerson.id)
    : userList
  const newStaffList = (selectedPerson.role === 'staff')
    ? staffList.filter(staff => staff.id !== selectedPerson.id)
    : staffList
  return {
    bugList: newBugList,
    peopleList: newPeopleList,
    userList: newUserList,
    staffList: newStaffList,
    selectedBug: newBugList?.[0],
    selectedPerson: newUserList?.[0] ?? newStaffList?.[0]
  }
}