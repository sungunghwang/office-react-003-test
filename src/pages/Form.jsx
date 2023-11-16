import React, { useState } from 'react'

function Form() {
  const [text, setText] = useState('')
  const [num, setNum] = useState(0)
  const [tarea, setTarea] = useState('')

  const [sec, setSec] = useState('3')

  const [isChk1, setIsChk1] = useState(false)
  const [isChk2, setIsChk2] = useState(true)

  return (
    <div className="container cnt">
      <h1>Form</h1>

      {/* 폼 단위 */}
      <div className="mb-5 mt-3">
        <label htmlFor="text1" className="form-label">
          글입력
        </label>
        <input
          type="text"
          className="form-control"
          id="text1"
          name="text1"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <p className="mt-3">
          <strong>출력 : </strong> {text}
        </p>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <div className="mb-5 mt-3">
        <div className="mb-2">증가감소</div>
        <div className="d-flex">
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              setNum((prevNum) => prevNum + 1)
            }}
          >
            1증가
          </button>
          <input type="text" className="form-control text-center" style={{ width: '120px' }} id="text2" name="text2" value={num} readOnly />
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              setNum((prevNum) => prevNum - 1)
            }}
          >
            1감소
          </button>
        </div>

        <p className="mt-3">
          <strong>출력 : </strong>
          {num}
        </p>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <div className="mb-5 mt-3">
        <label htmlFor="tarea1" className="form-label">
          글상자
        </label>
        <textarea
          className="form-control"
          name="tarea1"
          id="tarea1"
          rows="5"
          onChange={(e) => {
            setTarea(e.target.value)
          }}
        />
        <p className="mt-3">
          <strong>출력 : </strong>
          {tarea}
        </p>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <div className="mb-5 mt-3">
        <label htmlFor="sec1" className="form-label">
          셀렉트박스
        </label>
        <select
          id="sec1"
          className="form-select"
          value={sec || ''}
          onChange={(e) => {
            setSec(e.target.value)
          }}
        >
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <p className="mt-3">
          <strong>초기 선택값 : </strong>
          {sec}
        </p>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <div className="mb-5 mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={isChk1}
            onChange={(e) => {
              setIsChk1(e.target.checked)
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox {isChk1 ? `선택됨` : `해제됨`}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            checked={isChk2}
            onChange={(e) => {
              setIsChk2(e.target.checked)
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox {isChk2 ? `선택됨` : `해제됨`}
          </label>
        </div>
      </div>
      {/* 폼 단위 */}
    </div>
  )
}

export default Form
