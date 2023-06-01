import React from 'react'
import { 
  LOADING,
  LOG_IN, 
  USUARIO_LOGADO_CARREGAR, 
  USUARIO_LOGADO_PREFERENCIAS, 
  SIDEBAR_LEFT, 
  SIDEBAR_RIGHT, 
  MODAL_OPEN,
  INFO_USER,
  VALIDACAO
} from './layoutActions'

const initialState = {
  load: false,
  sidebarRight: false,
  sidebarLeft: false,
  statusModal: '',
  infoUser: {},
  usuario: { nome: '', email: '' },
  listas: {
    idiomas: [
      {
        id: 'pt-BR',
        name: 'Português'
      },
      {
        id: 'en-US',
        name: 'English'
      }
    ],
    modoCores: [
      {
        id: 'claro',
        name: 'Claro'
      },
      {
        id: 'escuro',
        name: 'Escuro'
      }
    ]
  },
  erro: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, load: payload }
    case LOG_IN:
      return { ...state, logIn: payload }
    case USUARIO_LOGADO_CARREGAR:
      return { ...state, usuario: payload }
    case USUARIO_LOGADO_PREFERENCIAS:
      return { ...state, preferencias: {...state.preferencias, ...payload} }
    case SIDEBAR_LEFT:
      return { ...state, sidebarLeft: payload }
    case SIDEBAR_RIGHT:
      return { ...state, sidebarRight: payload }
    case MODAL_OPEN:
      return { ...state, statusModal: payload }
    case INFO_USER:
      return { ...state, infoUser: payload }
    case VALIDACAO:
      return { ...state, erro: payload }
    default:
      return state
  }
}
