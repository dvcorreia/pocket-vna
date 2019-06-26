import React from 'react'
import FA from 'react-fontawesome'

export default ({active, onToggle}) =>
    <div className={'modal' + (active ? ' is-active' : '')}>
        <div className="modal-background" onClick={onToggle}></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">
                <FA className="fab" name="question-circle"/>
                <span style={{paddingLeft: 5}}>FAQ</span>
            </p>
            <button className="delete" aria-label="close" onClick={onToggle}></button>
            </header>
            <section className="modal-card-body">
                <h1>Content goes here</h1>
            </section>
            <footer className="modal-card-foot">
            <button className="button is-danger" onClick={onToggle}>Close</button>
            </footer>
        </div>
    </div>