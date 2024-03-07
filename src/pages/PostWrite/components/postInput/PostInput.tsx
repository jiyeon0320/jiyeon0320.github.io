import styles from './PostInput.module.css'

interface PostInputProps {}

const PostInput = ({}: PostInputProps) => {
  return <textarea className={styles.post_input} />
}
export default PostInput
