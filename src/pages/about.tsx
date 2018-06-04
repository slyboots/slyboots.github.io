import React from "react";

export default () => (
    <div>
        <h1 className="title is-1">About Me</h1>
        <h2 className="subtitle is-3">I have two cats and a wife!</h2>
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                            <p className="title">Pan</p>
                            <p className="subtitle">put picture of pan here</p>
                        </article>
                        <article className="tile is-child notification is-warning">
                            <p className="title">put picture of whisp here</p>
                            <p className="subtitle">she is on bottom because she's fat</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">My wife</p>
                            <p className="subtitle">Michelle</p>
                            <figure className="image is-4by3">
                                <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F04%2Fraccoon.jpg%3Fw%3D2000&w=640&q=100" />
                            </figure>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-danger">
                        <p className="title">Code</p>
                        <p className="subtitle">I do this sometimes</p>
                        <div className="content">
                            {/* <!-- Content --> */}
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <p className="title">Idk what to put here</p>
                        <p className="subtitle">hmmm</p>
                        <div className="content">
                            Probably will break it up in to sections or put a fancy mission statement
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
);
