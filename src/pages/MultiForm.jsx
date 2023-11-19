import React, { useState } from 'react'

function MultiForm() {
  const [multiData, setMultiData] = useState({
    multiUser: '홍길순',
    multiEmail: 'hongil@gmail.com',
    multiOccupation: '2',
    multiGender: 'male',
    multiLanguage: ['HTML', 'CSS'],
  })

  const onChangeMultiData = (e) => {
    // 이벤트 발생이 checkbox 인지 else 그외의(input, select, radio, textarea) 이벤트 발생인지  구분하여 상태를 업데이트 시켜준다.
    if (e.target.name === 'multiLanguage') {
      // 이벤트가 체크박스 인경우
      const copyData = { ...multiData }
      if (e.target.checked) {
        // 체크박스가 체크되어서 여기에 왔을때
        copyData.multiLanguage.push(e.target.value)
      } else {
        // 체크박스가 체크해제로 여기에 왔을때
        copyData.multiLanguage = copyData.multiLanguage.filter((item) => item !== e.target.value)
      }
      setMultiData(copyData)
    } else {
      // 이벤트가 그외의(input, select, radio, textarea) 것인 경우
      setMultiData(() => ({
        ...multiData,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // 여기 코드 이하 부터는 fetch API 또는 axios 를 이용해 서버에 POST 요청으로 데이터를 전송하면되는 것이다.
    console.table(multiData)
  }

  return (
    <div className="container cnt">
      <h1>Form</h1>
      <br />
      <br />

      <h2 className="mb-5">🎁form 멀티 폼 처리 케이스</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="container border g-0 p-2 p-lg-5">
          <div className="row justify-content-center g-0">
            <div className="col col-xl-8 border g-0 p-2 p-lg-5">
              <div className="mb-3">
                <label htmlFor="user1" className="form-label fw-bold">
                  User Name
                </label>
                <input type="text" className="form-control" id="user1" name="multiUser" value={multiData.multiUser} onChange={onChangeMultiData} />
              </div>
              <div className="mb-3">
                <label htmlFor="email1" className="form-label fw-bold">
                  Email address
                </label>
                <input type="email" className="form-control" placeholder="name@example.com" id="email1" name="multiEmail" value={multiData.multiEmail} onChange={onChangeMultiData} />
              </div>
              <div className="mb-3">
                <label htmlFor="select1" className="form-label fw-bold">
                  Occupation
                </label>
                <select className="form-select" id="select1" name="multiOccupation" value={multiData.multiOccupation} onChange={onChangeMultiData}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <fieldset>
                  <legend className="fs-6 fw-bold">Gender</legend>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="gender-rdo1" value="male" name="multiGender" onChange={onChangeMultiData} checked={multiData.multiGender === 'male'} />
                    <label className="form-check-label" htmlFor="gender-rdo1">
                      남성
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="gender-rdo2" value="female" name="multiGender" onChange={onChangeMultiData} checked={multiData.multiGender === 'female'} />
                    <label className="form-check-label" htmlFor="gender-rdo2">
                      여성
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="gender-rdo3" value="other" name="multiGender" onChange={onChangeMultiData} checked={multiData.multiGender === 'other'} />
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
                    <input className="form-check-input" type="checkbox" id="lang-chk1" value="HTML" name="multiLanguage" onChange={onChangeMultiData} checked={multiData.multiLanguage.indexOf('HTML') !== -1} />
                    <label className="form-check-label" htmlFor="lang-chk1">
                      HTML
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="lang-chk2" value="CSS" name="multiLanguage" onChange={onChangeMultiData} checked={multiData.multiLanguage.indexOf('CSS') !== -1} />
                    <label className="form-check-label" htmlFor="lang-chk2">
                      CSS
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="lang-chk3" value="Javascript" name="multiLanguage" onChange={onChangeMultiData} checked={multiData.multiLanguage.indexOf('Javascript') !== -1} />
                    <label className="form-check-label" htmlFor="lang-chk3">
                      Javascript
                    </label>
                  </div>
                </fieldset>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

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

export default MultiForm
