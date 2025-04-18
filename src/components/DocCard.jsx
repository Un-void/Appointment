const DocCard =({id, name, specialization})=>{
    return(
        <div key={id} className="bg-white p-4 shadow rounded">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{specialization}</p>
        </div>
    )
}

export default DocCard