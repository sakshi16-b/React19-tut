import style from "./css/userProfile.module.css";

function UserProfile() {
  return (
    <>
      <div>
        <h1 className={style.heading}>User Profile</h1>
        <div className={style.card}>
          <img
            className={style.imgcard}
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
        </div>
        <div className={style.textwrap}>
          <h4>Sakshi Bisht</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
