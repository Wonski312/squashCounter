import classes from './Wrapper.module.css'

const Wrapper = (props) =>{
    return <section className={`${classes.wrapper} ${props.className ? props.className : ''}`}>{props.children}</section>
}
export default Wrapper;