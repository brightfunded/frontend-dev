import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  // user api start
  //user register
  userRegister(payload: any) {
    return this.http.post<any>(`${this.url}/user/add`, payload);
  }

  //login
  login(payload: any) {
    return this.http.post<any>(`${this.url}/user/login`, payload);
  }

  //forgot password
  forgotPassword(payload: any) {
    return this.http.put<any>(`${this.url}/user/forgot-password`, payload);
  }

  //reset password
  resetPassword(payload: any) {
    return this.http.post<any>(`${this.url}/user/reset-password`, payload);
  }

  //getOneuser with Id
  getOneUserById(id: any) {
    return this.http.get<any>(`${this.url}/user/getOne/${id}`);
  }

  //get one user by search
  getOneUserBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/user/search`, payload);
  }

  //list user
  listUser() {
    return this.http.get<any>(`${this.url}/user/list`);
  }

  //update user
  updateUser(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/user/update/${id}`, payload);
  }

  //delete user
  deleteUser(id: any) {
    return this.http.delete<any>(`${this.url}/user/delete/${id}`);
  }


  // user api end

  // account api start
  //account register
  accountRegister(payload: any) {
    return this.http.post<any>(`${this.url}/account/add`, payload);
  }


  //getOneaccount with Id
  getOneAccountById(id: any) {
    return this.http.get<any>(`${this.url}/account/getOne/${id}`);
  }

  //get one Account by search
  getOneAccountBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/account/search`, payload);
  }

  //list Account
  listAccount() {
    return this.http.get<any>(`${this.url}/account/list`);
  }

  //update Account
  updateAccount(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/account/update/${id}`, payload);
  }

  //delete Account
  deleteAccount(id: any) {
    return this.http.delete<any>(`${this.url}/account/delete/${id}`);
  }


  // Account api end


  // Country api start
  //Country register
  countryRegister(payload: any) {
    return this.http.post<any>(`${this.url}/country/add`, payload);
  }


  //getOneCountry with Id
  getOneCountryById(id: any) {
    return this.http.get<any>(`${this.url}/country/getOne/${id}`);
  }

  //get one Country by search
  getOneCountryBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/country/search`, payload);
  }

  //list Country
  listCountry() {
    return this.http.get<any>(`${this.url}/country/list`);
  }

  //update Country
  updateCountry(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/country/update/${id}`, payload);
  }

  //delete Country
  deleteCountry(id: any) {
    return this.http.delete<any>(`${this.url}/country/delete/${id}`);
  }


  // Country api end



  // Forex api start
  //Forex register
  forexRegister(payload: any) {
    return this.http.post<any>(`${this.url}/forex/add`, payload);
  }


  //getOneForex with Id
  getOneForexById(id: any) {
    return this.http.get<any>(`${this.url}/forex/getOne/${id}`);
  }

  //get one Forex by search
  getOneForexBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/forex/search`, payload);
  }

  //list Forex
  listForex() {
    return this.http.get<any>(`${this.url}/forex/list`);
  }

  //update Forex
  updateForex(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/forex/update/${id}`, payload);
  }

  //delete Forex
  deleteForex(id: any) {
    return this.http.delete<any>(`${this.url}/forex/delete/${id}`);
  }


  // Forex api end



  // Language api start
  //Language register
  languageRegister(payload: any) {
    return this.http.post<any>(`${this.url}/language/add`, payload);
  }


  //getOneLanguage with Id
  getOneLanguageById(id: any) {
    return this.http.get<any>(`${this.url}/language/getOne/${id}`);
  }

  //get one Language by search
  getOneLanguageBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/language/search`, payload);
  }

  //list Language
  listLanguage() {
    return this.http.get<any>(`${this.url}/language/list`);
  }

  //update Language
  updateLanguage(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/language/update/${id}`, payload);
  }

  //delete Language
  deleteLanguage(id: any) {
    return this.http.delete<any>(`${this.url}/language/delete/${id}`);
  }


  // Language api end


  // TimeZone api start
  //TimeZone register
  timeZoneRegister(payload: any) {
    return this.http.post<any>(`${this.url}/timezone/add`, payload);
  }


  //getOneTimeZone with Id
  getOneTimeZoneById(id: any) {
    return this.http.get<any>(`${this.url}/timezone/getOne/${id}`);
  }

  //get one TimeZone by search
  getOneTimeZoneBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/timezone/search`, payload);
  }

  //list TimeZone
  listTimeZone() {
    return this.http.get<any>(`${this.url}/timezone/list`);
  }

  //update TimeZone
  updateTimeZone(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/timezone/update/${id}`, payload);
  }

  //delete TimeZone
  deleteTimeZone(id: any) {
    return this.http.delete<any>(`${this.url}/timezone/delete/${id}`);
  }


  // TimeZone api end



  // TradingJournal api start
  //TradingJournal register
  tradingJournalRegister(payload: any) {
    return this.http.post<any>(`${this.url}/tradingJournal/add`, payload);
  }


  //getOneTradingJournal with Id
  getOneTradingJournalById(id: any) {
    return this.http.get<any>(`${this.url}/tradingJournal/getOne/${id}`);
  }

  //get one TradingJournal by search
  getOneTradingJournalBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/tradingJournal/search`, payload);
  }

  //list TradingJournal
  listTradingJournal() {
    return this.http.get<any>(`${this.url}/tradingJournal/list`);
  }

  //update TradingJournal
  updateTradingJournal(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/tradingJournal/update/${id}`, payload);
  }

  //delete TradingJournal
  deleteTradingJournal(id: any) {
    return this.http.delete<any>(`${this.url}/tradingJournal/delete/${id}`);
  }


  // TradingJournal api end



  // TradingObjectives api start
  //TradingObjectives register
  tradingObjectivesRegister(payload: any) {
    return this.http.post<any>(`${this.url}/tradingObjectives/add`, payload);
  }


  //getOneTradingObjectives with Id
  getOneTradingObjectivesById(id: any) {
    return this.http.get<any>(`${this.url}/tradingObjectives/getOne/${id}`);
  }

  //get one TradingObjectives by search
  getOneTradingObjectivesBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/tradingObjectives/search`, payload);
  }

  //list TradingObjectives
  listTradingObjectives() {
    return this.http.get<any>(`${this.url}/tradingObjectives/list`);
  }

  //update TradingObjectives
  updateTradingObjectives(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/tradingObjectives/update/${id}`, payload);
  }

  //delete TradingObjectives
  deleteTradingObjectives(id: any) {
    return this.http.delete<any>(`${this.url}/tradingObjectives/delete/${id}`);
  }


  // TradingObjectives api end



  // TradingStatistics api start
  //TradingStatistics register
  tradingStatisticsRegister(payload: any) {
    return this.http.post<any>(`${this.url}/tradingStatistics/add`, payload);
  }


  //getOneTradingStatistics with Id
  getOneTradingStatisticsById(id: any) {
    return this.http.get<any>(`${this.url}/tradingStatistics/getOne/${id}`);
  }

  //get one TradingStatistics by search
  getOneTradingStatisticsBySearch(payload: any) {
    return this.http.post<any>(`${this.url}/tradingStatistics/search`, payload);
  }

  //list TradingStatistics
  listTradingStatistics() {
    return this.http.get<any>(`${this.url}/tradingStatistics/list`);
  }

  //update TradingStatistics
  updateTradingStatistics(id: any, payload: any) {
    return this.http.put<any>(`${this.url}/tradingStatistics/update/${id}`, payload);
  }

  //delete TradingStatistics
  deleteTradingStatistics(id: any) {
    return this.http.delete<any>(`${this.url}/tradingStatistics/delete/${id}`);
  }


  // TradingStatistics api end
}
