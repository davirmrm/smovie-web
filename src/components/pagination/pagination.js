import React, { useState } from 'react'
import './pagination.scss'
import { Button } from '../button/button'
// import { IcoArrowForward, IcoArrowBack, IcoSpinner } from '../icon'

const textDefault = {
  text: '{{pageNumber}} of {{totalPages}} - {{totalElements}} registers',
  next: 'Next',
  before: 'Previous',
  reload: 'Update'
  // next: <IcoArrowForward />,
  // before: <IcoArrowBack />,
  // reload: <IcoSpinner />
}

const adjustText = (text, infos) => {
  let result = text
  Object.keys(infos).forEach((key) => {
    result = String(result).replaceAll(`{{${key}}}`, String(infos[key]));
  });
  return result
}

export function Paginate({ data = { pageNumber: 1, totalPages: 1, totalElements: 0 }, action, text = textDefault }) {
  const [paginateTemp, setPaginateTemp] = useState(String(data.pageNumber ? data.pageNumber : 1))
  const changePaginate = event => {
    setPaginateTemp(event.target.value)
  }

  const reloadPaginate = event => {
    if (event || event === 0) {
      if (event <= data.totalPages) {
        setPaginateTemp(event)
        action(event)
      }
    } else if (paginateTemp >= 1 && paginateTemp <= data.totalPages) {
      action(Number(paginateTemp))
    } else {
      setPaginateTemp(data.pageNumber)
    }
  }

  return (
    <div className='pagination-custom'>
      {
        data.totalElements > 0 ?
        <>
          <Button
            type='btn circle'
            color='primary'
            onClick={() => reloadPaginate(data.pageNumber - 1)}
            disabled={data.pageNumber <= 1 ? true : false}
          >
            {text.before}
          </Button>
          <div className='page-item'>
            <input type='number' name='paginate' value={paginateTemp} onChange={event => changePaginate(event)} />
            <Button
              type='btn circle'
              color='primary'
              onClick={() => reloadPaginate()}
              disabled={data.totalElements === 0 ? true : false}
            >
              {text.reload}
            </Button>
          </div>

          <Button
            type='btn circle'
            color='primary'
            onClick={() => reloadPaginate(data.pageNumber + 1)}
            disabled={data.pageNumber >= data.totalPages ? true : false}
          >
            {text.next}
          </Button>

          <span className='pagination-info'>
            {adjustText(text.text, data)}
          </span>
        </>
        : <></>
      }
    </div>
  )
}

export const PaginateTotal = ({
  total,
  totalPerPage
}) => {
  const totalPage = total / totalPerPage
  if (Number.isInteger(totalPage)) {
    return totalPage
  } else {
    return parseInt(total / totalPerPage) + 1
  }
}