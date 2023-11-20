import React, { useState } from 'react'

function Form() {
  const [text, setText] = useState('초기값 출력')
  const [num, setNum] = useState(5)
  const [tarea, setTarea] = useState('초기값 출력')
  const [sec, setSec] = useState('3')
  const [isRdo, setIsRdo] = useState('female')
  // 체크박스 개별처리
  const [isChk1, setIsChk1] = useState('HTML')
  const [isChk2, setIsChk2] = useState('CSS')
  // 체크박스 멀티처리
  const [isTech, setIsTech] = useState(['웹퍼블리싱', '웹서버관리'])
  const onChangeTechHandler = (e) => {
    let copyData = [...isTech]
    const checked = e.target.checked
    const value = e.target.value
    if (checked) {
      copyData.push(value)
    } else {
      copyData = copyData.filter((item) => item !== value)
    }
    setIsTech(copyData)
  }

  return (
    <div className="container cnt">
      <h1>Form</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 컨트롤러 단일 작동 및 초기 값 처리</h2>

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
          value={tarea}
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
            type="radio"
            id="rdo1"
            name="gender"
            value="male"
            checked={isRdo === 'male'}
            onChange={(e) => {
              setIsRdo(e.target.value)
            }}
          />
          <label className="form-check-label" htmlFor="rdo1">
            남성 {isRdo === 'male' ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="rdo2"
            name="gender"
            value="female"
            checked={isRdo === 'female'}
            onChange={(e) => {
              setIsRdo(e.target.value)
            }}
          />
          <label className="form-check-label" htmlFor="rdo2">
            여성 {isRdo === 'female' ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="rdo3"
            name="gender"
            value="other"
            checked={isRdo === 'other'}
            onChange={(e) => {
              setIsRdo(e.target.value)
            }}
          />
          <label className="form-check-label" htmlFor="rdo3">
            기타 {isRdo === 'other' ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <h3>체크박스 개별 처리</h3>
      <div className="mb-5 mt-3">
        <p>HTML 사용여부</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="chk1"
            value="HTML"
            checked={isChk1 === 'HTML'}
            onChange={(e) => {
              if (e.target.checked) {
                setIsChk1(e.target.value)
              } else {
                setIsChk1('')
              }
            }}
          />
          <label className="form-check-label" htmlFor="chk1">
            HTML {isChk1 ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>

        <br />
        <br />

        <p>CSS 사용여부</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="chk2"
            value="CSS"
            checked={isChk2 === 'CSS'}
            onChange={(e) => {
              if (e.target.checked) {
                setIsChk2(e.target.value)
              } else {
                setIsChk2('')
              }
            }}
          />
          <label className="form-check-label" htmlFor="chk2">
            CSS {isChk2 ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>
      </div>
      {/* 폼 단위 */}

      {/* 폼 단위 */}
      <h3>다중 체크박스 배열 처리로 한번에 상태관리</h3>
      <div className="mb-5 mt-3">
        <p>보유기술 현황</p>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="chkID01" name="technology" value="웹디자인" checked={isTech.indexOf('웹디자인') !== -1} onChange={onChangeTechHandler} />
          <label className="form-check-label" htmlFor="chkID01">
            웹디자인 {isTech.indexOf('웹디자인') !== -1 ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="chkID02" name="technology" value="웹퍼블리싱" checked={isTech.indexOf('웹퍼블리싱') !== -1} onChange={onChangeTechHandler} />
          <label className="form-check-label" htmlFor="chkID02">
            웹퍼블리싱 {isTech.indexOf('웹퍼블리싱') !== -1 ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="chkID03" name="technology" value="웹서버관리" checked={isTech.indexOf('웹서버관리') !== -1} onChange={onChangeTechHandler} />
          <label className="form-check-label" htmlFor="chkID03">
            웹서버관리 {isTech.indexOf('웹서버관리') !== -1 ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="chkID04" name="technology" value="웹프로그래밍" checked={isTech.indexOf('웹프로그래밍') !== -1} onChange={onChangeTechHandler} />
          <label className="form-check-label" htmlFor="chkID04">
            웹프로그래밍 {isTech.indexOf('웹프로그래밍') !== -1 ? '선택됨' : <span style={{ color: 'red' }}>해제됨</span>}
          </label>
        </div>
      </div>
      {/* 폼 단위 */}

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Form
