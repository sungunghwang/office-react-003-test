import React, { useEffect, useState } from 'react'
import TableItem from '../components/TableItem'

function TableList() {
  /*   const users = [
    {
      id: 1,
      name: '홍길동',
      tel: '010-1111-2222',
      email: 'hong@naver.com',
      summary: '안녕하세요 저는 홍길동입니다. 이런저런 기술을 보유하고있어요',
    },
    {
      id: 2,
      name: '김부식',
      tel: '010-2222-2222',
      email: 'kim@naver.com',
      summary: '안녕하세요 저는 김부식입니다. 이런저런 기술을 보유하고있어요 안녕하세요 저는 김부식입니다. 이런저런 기술을 보유하고있어요',
    },
    {
      id: 3,
      name: '박나리',
      tel: '010-3333-2222',
      email: 'park@naver.com',
      summary: '안녕하세요 저는 박나리입니다. 이런저런 기술을 보유하고있어요 안녕하세요 저는 박나리입니다.  ',
    },
    {
      id: 4,
      name: '최을수',
      tel: '010-4444-2222',
      email: 'choi@naver.com',
      summary: '안녕하세요 저는 최을수입니다. 이런저런 기술을 보유하고있어요 이런저런 기술을 보유하고있어요 이런저런 기술을 보유하고있어요 이런저런 기술을 보유하고있어요',
    },
  ] */

  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('http://localhost:3001/user')
      .then((Response) => Response.json())
      .then((json) => {
        setUsers(json)
      })
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container cnt">
      <h1>TableList</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 json-server 의 user 데이터를 fetch로 가져와 테이블 목록 구성하기</h2>

      <table className="table table-bordered">
        <caption>사용자 목록</caption>
        <colgroup>
          <col style={{ width: '6%' }} />
          <col style={{ width: '12%' }} />
          <col style={{ width: '22%' }} />
          <col style={{ width: '22%' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead className="table-dark">
          <tr>
            <th scope="col">번호</th>
            <th scope="col">이름</th>
            <th scope="col">전화</th>
            <th scope="col">이메일</th>
            <th scope="col">소개글</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <TableItem key={item.id} idx={idx + 1} userData={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableList
