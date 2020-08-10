import React, { useState } from 'react';
import Modal from 'react-modal';
import cx from 'classnames';
import styles from './folder.module.scss';

function Folder() {

    const [folders, setFolders] = useState(['sample 1', 'sample 2']);
    const [name, setName] = useState('')
    const [isModalOpen, setModal] = useState(false);
    const [showError, toggleError] = useState(false);

    function handleToggleModal() {
        setModal(val => !val);
    }

    function handleSubmitClick() {
        if (name.length > 30) {
            toggleError(true);
        } else {
            toggleError(false);
            setModal(false);
            setFolders(folders => [...folders, name]);
            setName('');
        }
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.heading}>Folder test</p>
            <div className={styles.border} />
            <div className={styles.folders}>
                {
                    folders.map(name => (
                        <div className={styles.folder} key={name}>
                            <p className={styles.name}>{name}</p>
                        </div>
                    ))
                }
                <div className={styles.new} onClick={handleToggleModal}>+</div>
            </div>
            <Modal
                isOpen={isModalOpen}
                className={styles.modal}
                overlayClassName={styles.overlay}
                onRequestClose={handleToggleModal}
            >
                <textarea className={cx(styles.input, { [styles.error]: showError })} autoFocus value={name} onChange={handleChange} />
                <div className={styles.button} onClick={handleSubmitClick}>create folder</div>
                {showError ? <p className={cx(styles.text, styles.error)}>Please enter less than 30 characters</p> : <p className={cx(styles.text, styles.warning)}>Folder name should be less than 30 characters</p>}
            </Modal>
        </div>
    )
}

export default Folder;
