import { useParams } from "react-router-dom";
import { Page } from "../page/Page";

export const Category = () => {
    const {categoryId} = useParams()

    return(
        <Page>
            <h1 className="text-left mt-10 ml-5 uppercase leading-5 text-4xl">{categoryId}</h1>
        </Page>
    )
}