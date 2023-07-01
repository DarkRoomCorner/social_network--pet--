import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.state.dialogsData.map(dialog =>
          <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
        )}
      </div>
      <div className={styles.messages}>
        {props.state.messagesData.map(message =>
          <Message text={message.text} id={message.id} sender={message.sender} />
        )}
      </div>
    </div>
  )
}

export default Dialogs;