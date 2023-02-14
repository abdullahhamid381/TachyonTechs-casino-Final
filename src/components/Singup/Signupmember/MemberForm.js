import React, { Fragment } from 'react';
import '../../../scss/Signup/Signupmember/Signupmember.scss'
const MemberForm = () => {
  return (
    <Fragment>
      <div className='signupmember-form'>
        <center>
          <img src={"./images/logo.PNG"} alt="" width={"20%"} className='singupmember-logo'  />
          <h2>카인사 회원가입 축하드립니다. 닉네임님
            카인사 사용 전 공지사항을 필독 부탁드립니다.
          </h2>
          <img src={'./images/join-ico'} alt="" className='singupmember-join' style={{display:'flex'}} />
          <input type="text" placeholder='메인 바로가기' />
        </center>
      </div>

    </Fragment>
  );
}

export default MemberForm;
