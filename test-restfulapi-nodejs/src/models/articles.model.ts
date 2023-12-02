import {Schema, model} from 'mongoose'

type IArticle = {
    title: string,
    keyword: string,
    description: string,
    content: string,
    date: Date,
}

const articleSchema = new Schema<IArticle> ({
    title: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }   
});

const Article = model<IArticle>('Article',articleSchema)
export default Article
