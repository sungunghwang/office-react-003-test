/* eslint-disable */

/* 이 파일은 코딩중에 마크업 참고용도로 사용하는 것이다. */



function test() {

  const [multiData, setMultiData] = useState({
    multiUser: '홍길순',
    multiEmail: 'hongil@gmail.com',
    multiOccupation: '2',
    multiGender: 'male',
    multiLanguage: ['HTML', 'CSS'],
  })


  return (
    <div className="container border g-0 p-2 p-lg-5">
      <div className="row justify-content-center g-0">
        <div className="col col-xl-8 border g-0 p-2 p-lg-5">
          <div className="mb-3">

            <label htmlFor="user1" className="form-label fw-bold">
              User Name
            </label>
            <input type="text" className="form-control" id="user1" value={multiUser} name="multiUser" />
          </div>
          <div className="mb-3">
            <label htmlFor="email1" className="form-label fw-bold">
              Email address
            </label>
            <input type="email" className="form-control" placeholder="name@example.com" id="email1" value={multiEmail} name="multiEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="select1" className="form-label fw-bold">
              Occupation
            </label>
            <select className="form-select" id="select1" value={multiOccution} name="multiOccupation">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <fieldset>
              <legend className="fs-6 fw-bold">Gender</legend>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="gender-rdo1" value="male" name="multiGender" />
                <label className="form-check-label" htmlFor="gender-rdo1">
                  남성
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="gender-rdo2" value="female" name="multiGender" />
                <label className="form-check-label" htmlFor="gender-rdo2">
                  여성
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="gender-rdo3" value="other" name="multiGender" />
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
                <input className="form-check-input" type="checkbox" id="lang-chk1" value="HTML" name="multiLanguage" />
                <label className="form-check-label" htmlFor="lang-chk1">
                  HTML
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lang-chk2" value="CSS" name="multiLanguage" />
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
  )
}
