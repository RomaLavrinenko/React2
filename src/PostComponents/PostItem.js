import styles from './PostItem.module.css'
const PostItem = (props) =>{
    const {user , handleClick} = props;
    return(
        <>
        <div className={styles.wrapper}>
            <h2 style={{color:'red'}}>{user.id}</h2>
            <h1 >{user.title}</h1>
            <input type="button" value="Show Info" className={styles.btn} onClick={() => handleClick(user)} />
        </div>
        </>
    );
}

export default PostItem;