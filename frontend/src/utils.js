import axios from 'axios'
import config from './config'

export const API = axios.create({
  baseURL: config.BACKEND
})

export const getCurrentTime = () => {
  const dt = new Date()
  let current_date = dt.getDate()
  let current_month = dt.getMonth() + 1
  let current_year = dt.getFullYear()
  let current_hrs = dt.getHours()
  let current_mins = dt.getMinutes()
  let current_secs = dt.getSeconds()
  current_date = current_date < 10 ? '0' + current_date : current_date
  current_month = current_month < 10 ? '0' + current_month : current_month
  current_hrs = current_hrs < 10 ? '0' + current_hrs : current_hrs
  current_mins = current_mins < 10 ? '0' + current_mins : current_mins
  current_secs = current_secs < 10 ? '0' + current_secs : current_secs
  return current_year + '-' + current_month + '-' + current_date + ' ' + current_hrs + ':' + current_mins + ':' + current_secs
}