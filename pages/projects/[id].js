import { useRouter } from "next/dist/client/router";
import Project from "../../compoments/Project";
export default function ProjectDynamic({project}){

    const router = useRouter()
    const {id} = router.query

    return(<><Project data = {project}/>
    </>)
}

export async function getStaticProps({params}){

    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    console.log(req);
    const data = await req.json();
    return{
        props: {project: data},
    }

}

export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/projects.json');
    const data = await req.json();

    const paths = data.map(project => {
        return {params: {id: project}}
    })

    return {
        paths,
        fallback: false
    };

}