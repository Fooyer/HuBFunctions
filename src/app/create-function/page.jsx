"use client"
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
import styles from './page.module.css';

export default function createFunction() {
    const [code, setCode] = useState();

    function handleCode(event) {
        setCode(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(code);
    }

    return (
        <div className={styles.container}>
            <h1>Create your new function</h1>

            <form onSubmit={handleSubmit}>
                <CodeEditor
                value={code}
                language="js"
                placeholder="Please enter code."
                onChange={handleCode}
                padding={15}
                className={styles.textcode}
                style={{
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                }}
                />
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Cancel</button>
                    <button className={styles.button} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}