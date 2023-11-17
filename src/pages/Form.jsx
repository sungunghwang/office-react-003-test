import React, { useState } from 'react'

function Form() {
  const [text, setText] = useState('')
  const [num, setNum] = useState(0)
  const [tarea, setTarea] = useState('')
  const [sec, setSec] = useState('3')
  const [isChk, setIsChk] = useState(true)
  const [isRdo, setIsRdo] = useState()

  const [multiData, setMultiData] = useState({
    multiUser: '',
    multiEmail: '',
    multiOccupation: '',
    multiGender: '',
    multiLanguage: [],
  })

  const onChangeMultiData = (e) => {
    console.log(e)
  }

  return (
    <div className="container cnt">
      <h1>Form</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁form 단일 처리 케이스</h2>

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
            type="button"
            className="btn btn-outline-dark"
            onClick={() => {
              setNum((prevNum) => prevNum + 1)
            }}
          >
            1증가
          </button>
          <input type="text" className="form-control text-center" style={{ width: '120px' }} id="text2" name="text2" value={num} readOnly />
          <button
            type="button"
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
            id="chk1"
            value={isChk}
            checked={isChk}
            onChange={(e) => {
              setIsChk(e.target.checked)
            }}
          />
          <label className="form-check-label" htmlFor="chk1">
            Default checkbox {isChk ? `선택됨` : `해제됨`}
          </label>
        </div>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <div className="mb-5 mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="rdo1"
            name="gender"
            value="male"
            onChange={(e) => {
              setIsRdo(e.target.value)
            }}
          />
          <label className="form-check-label" htmlFor="rdo1">
            남성 {isRdo === 'male' ? `선택됨` : `해제됨`}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="rdo2"
            name="gender"
            value="female"
            onChange={(e) => {
              setIsRdo(e.target.value)
            }}
          />
          <label className="form-check-label" htmlFor="rdo2">
            여성 {isRdo === 'female' ? `선택됨` : `해제됨`}
          </label>
        </div>
        <p className="mt-3 text-danger">초기값을 어떻게 구현하는지 고민해야함</p>
      </div>
      {/* 폼 단위 */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="mb-5">🎁form 멀티 폼 처리 케이스</h2>

      <div className="container border g-0 p-2 p-lg-5">
        <div className="row justify-content-center g-0">
          <div className="col col-xl-8 border g-0 p-2 p-lg-5">
            <div className="mb-3">
              <label htmlFor="user1" className="form-label fw-bold">
                User Name
              </label>
              <input type="text" className="form-control" id="user1" name="multiUser" onChange={onChangeMultiData} />
            </div>
            <div className="mb-3">
              <label htmlFor="email1" className="form-label fw-bold">
                Email address
              </label>
              <input type="email" className="form-control" placeholder="name@example.com" id="email1" name="multiEmail" onChange={onChangeMultiData} />
            </div>
            <div className="mb-3">
              <label htmlFor="select1" className="form-label fw-bold">
                Occupation
              </label>
              <select className="form-select" id="select1" name="multiOccupation" onChange={onChangeMultiData}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <fieldset>
                <legend className="fs-6 fw-bold">Gender</legend>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="gender-rdo1" value="male" name="multiGender" onChange={onChangeMultiData} />
                  <label className="form-check-label" htmlFor="gender-rdo1">
                    남성
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="gender-rdo2" value="female" name="multiGender" onChange={onChangeMultiData} />
                  <label className="form-check-label" htmlFor="gender-rdo2">
                    여성
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="gender-rdo3" value="other" name="multiGender" onChange={onChangeMultiData} />
                  <label className="form-check-label" htmlFor="gender-rdo3">
                    기타
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="mb-3">
              <fieldset>
                <legend className="fs-6 fw-bold">Language</legend>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="lang-chk1" value="HTML" name="multiLanguage" onChange={onChangeMultiData} />
                  <label className="form-check-label" htmlFor="lang-chk1">
                    HTML
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="lang-chk2" value="CSS" name="multiLanguage" onChange={onChangeMultiData} />
                  <label className="form-check-label" htmlFor="lang-chk2">
                    CSS
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="lang-chk3" value="Javascript" name="multiLanguage" />
                  <label className="form-check-label" htmlFor="lang-chk3">
                    Javascript
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Form
