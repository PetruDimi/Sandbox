

const ProItem = (props) =>{
    const {selected, id, title} = props
    return (
        <li onClick={()=>{selected(id)}} key={id}>{title}</li>
    )
}

export default ProItem