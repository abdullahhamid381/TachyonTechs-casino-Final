import React, { Fragment } from 'react';

const Signuoformtwo = () => {
    return (
        <Fragment>
            <div className='singupformtwo-parent'>
                <div>
                <h1>10초 회원가입</h1>
                <input type="text" placeholder='아이디를 입력하세요' />
                <h6>이미 사용중인 아이디 입니다.</h6>
                <input type="text" placeholder='아이디를 입력하세요' />
                <br />
                <input type="text" placeholder='아이디를 입력하세요' />
                <h6>이미 사용중인 아이디 입니다.</h6>
                
                    <div style={{display:'flex'}}>
                    <input type="text" placeholder='' style={{padding:'20px 0',width:'30%'}} className='res'/>
                    <input type="text" placeholder='아이디를 입력하세요' style={{padding:'20px 97px', marginLeft:'10px ',width:'68%'}} className="res"  />
                        </div>

                <br />
                <button>가입완료</button>
                </div>
            </div>
            <center></center>
        </Fragment>
    );
}

export default Signuoformtwo;
