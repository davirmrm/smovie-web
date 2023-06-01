import { AddAlert } from "../../components"
import history from "../../helpers/history"
import api from "../../helpers/api"
const nls = require('../nls/pt-BR.json')

export const LOADING = 'LOADING'
export const loading = e => ({
  type: LOADING,
  payload: true
})
export const loaded = e => ({
  type: LOADING,
  payload: false
})

export const SIDEBAR_LEFT = 'SIDEBAR_LEFT'
export const setSidebarLeft = e => ({
  type: SIDEBAR_LEFT,
  payload: e
})

export const SIDEBAR_RIGHT = 'SIDEBAR_RIGHT'
export const setSidebarRigth = e => ({
  type: SIDEBAR_RIGHT,
  payload: e
})

export const MODAL_OPEN = 'MODAL_OPEN'
export const modalOpen = e => ({
  type: MODAL_OPEN,
  payload: e
})

export const VALIDACAO = 'VALIDACAO'
export const validacaoCampos = e => ({
  type: VALIDACAO,
  payload: e
})

export const USUARIO_LOGADO_CARREGAR = 'USUARIO_LOGADO_CARREGAR'
export const setCarregarUsuarioLogad = e => ({
  type: USUARIO_LOGADO_CARREGAR,
  payload: e
})


export const USUARIO_LOGADO_PREFERENCIAS = 'USUARIO_LOGADO_PREFERENCIAS'
export const setPreferenciasUsuarioLogad = e => ({
  type: USUARIO_LOGADO_PREFERENCIAS,
  payload: e
})

export const changePreferencias = e => {
  const idUsuario = localStorage.tokenLeading360
  const usuario = JSON.parse(localStorage.userEemovel)
  console.log(usuario, 'changePreferencias');
  const params = {[e.target.name]: e.target.value}
  return dispatch => {
    api.put(`/usuario/preferencias/${idUsuario}`, params)
    .then(response => {
      console.log(response, 'success changePreferencias');
      localStorage.setItem('userEemovel', JSON.stringify({...usuario, preferencias: {...usuario.preferencias,...response.data}}))
      dispatch(setPreferenciasUsuarioLogad(response.data))
    })
    .catch(error => {
      console.log(error, 'erro changePreferencias');
    })
  }
}

export const LOG_IN = 'LOG_IN'
const setLogIn = e => ({
  type: LOG_IN,
  payload: e
})

export const logIn = e => {
  return dispatch => {
    api
      .post(`/autenticacao`, e)
      .then(response => {
        localStorage.setItem('userEemovel', JSON.stringify(response.data.usuario))
        localStorage.setItem('tokenEemovel', response.data.token)

        dispatch([
          setLogIn(true), 
          setCarregarUsuarioLogad(response.data.usuario), 
          dispatch(setPreferenciasUsuarioLogad(response.data.usuario.preferencias))
        ])
        
      })
      .catch(error => {
        dispatch([setLogIn(false), AddAlert('error', nls.mensagem[error.request.response])])
      })
  }
}

export const loged = e => {
  return dispatch => {
    if (localStorage.tokenLeading360) {
      api.get(`/${localStorage.tokenLeading360}`)
      .then(response => {
        localStorage.setItem('userEemovel', JSON.stringify(response.data))
        dispatch([
          setLogIn(true), 
          setCarregarUsuarioLogad(response.data),
          dispatch(setPreferenciasUsuarioLogad(response.data.preferencias)),
        ])
      })
      .catch(error => {
        dispatch([setLogIn(false)])
      })
    }
  }
}

export const logOut = e => {
  localStorage.clear()
  return dispatch => [dispatch([
    setLogIn(false), 
    modalOpen(''),  
    setCarregarUsuarioLogad({})
  ])]
}

export const INFO_USER = 'INFO_USER'
const setInfoUser = e => ({
  type: INFO_USER,
  payload: e
})

export const infoUser = e => {
  const params = {
    as: "AS28573 CLARO S.A.",
    city: "Brasília",
    country: "Brazil",
    countryCode: "BR",
    isp: "Claro S.A.",
    lat: -15.7792,
    lon: -47.9341,
    org: "Claro S.A",
    query: "189.6.25.166",
    region: "DF",
    regionName: "Federal District",
    status: "success",
    timezone: "America/Sao_Paulo",
    zip: "70640"
  }
  return dispatch => {
      dispatch(setInfoUser(params))
  }
}

export const recuperarSenha = e => {
  return dispatch => {
    api
      .put(`/usuario/recuperarSenha/${e.email}`)
      .then(response => {
        dispatch([
          AddAlert('success', 'Senha enviada para o seu e-mail'),
          history.goBack()
        ])
      })
      .catch(error => {
        dispatch([setLogIn(false), AddAlert('error', nls.mensagem[error.request.response])])
      })
  }
}


export const paramsApi = e => {
  let params = ``
  if (e) {
    params = `?`
    Object.keys(e).map((par)=> {
      params = `${params === '?' ? params : params + '&'}${par}=${e[par]}`
    })
  }
  return params
}