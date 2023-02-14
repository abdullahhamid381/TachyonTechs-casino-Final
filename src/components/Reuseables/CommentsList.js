import React from 'react'
import "../../scss/comments.scss"
const CommentsList = ({ comments }) => {
    return (
        <section className="comments">
            <div className="bottom__heading">
                <h2>댓글</h2>
            </div>
            <ul className="comments__grid">
                {comments ? comments.map((comment, index) => {
                    return (
                        <li>
                            <div className="comment">
                                <div className="top">
                                    <div className="start">{comment.name}</div>
                                    <div className="end">{comment.date}</div>
                                </div>
                                <p>
                                    댓글 내용이 들어가는 곳 입니다., 댓글 내용이 들어가는 곳
                                    입니다.댓글 내용이 들어가는 곳 입니다., 댓글 내용이
                                    들어가는 곳 입니다.
                                </p>
                            </div>
                            {comment.replies && (
                                <ul className="replies">
                                    {comment.replies.map((reply, index) => (
                                        <li className="reply">
                                            <div className="top">
                                                <div className="start">
                                                    <span></span>{reply.name}</div>
                                                <div className="end">{reply.date}</div>
                                            </div>
                                            <p>
                                                댓글 내용이 들어가는 곳 입니다., 댓글 내용이
                                                들어가는 곳 입니다.댓글 내용이 들어가는 곳 입니다.,
                                                댓글 내용이 들어가는 곳 입니다.
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                }) : <p className=''>등록된 댓글이 없습니다.</p>}
            </ul>
        </section>
    )
}

export default CommentsList
