import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img alt='wallpaper' src='https://i.pinimg.com/originals/c2/eb/c3/c2ebc3a14ab6cc8f750328fc84d68150.jpg'></img>
      </div>

      <div className={styles.descriptionBlock} >
        Ava + description
        {/* <img alt='Avatar' src='https://ae04.alicdn.com/kf/Sa27b6769d1464cd7871a425d8b8c2e34S.jpg'></img> */}
      </div>
    </div>
  )
}

export default ProfileInfo;