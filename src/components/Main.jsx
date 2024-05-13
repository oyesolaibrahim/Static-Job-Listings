import JobList from "./Joblist";

const Main = ({jobs, addFilter}) => {
    return(
        <>
        <main>
            {
                jobs.map((job, index) => {
                    return (
                    <JobList
                    key={index}
                    job={job}
                    addToFilters={addFilter}
                    />
                    ) 
                })
            }
        </main>
        </>
    )
}


export default Main;