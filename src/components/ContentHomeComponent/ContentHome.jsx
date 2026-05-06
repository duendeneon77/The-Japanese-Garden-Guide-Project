import './ContentHome.css'
import ArticleCard from './Artigos/ArticleCard/ArticleCard'
import artigos from './Artigos/artigos.json'

function ContentHomeComponent(){
    
    
    return(
        <div className="contentHome-div">
            <h1>Artigos</h1>
            {artigos.map((item)=>(
                <ArticleCard
                key={item.id}
                artigo={item}
                />
            ))}
            

        </div>
    )
}

export default ContentHomeComponent