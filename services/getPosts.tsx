export async function getAllPosts() {
    const response=await fetch('/api/posts');
    if(!response.ok) throw new Error('Lav eli Sergo')
    return response.json();
}
export async function getPostsBySearch(search:string) {
    const response =await fetch(`/api/posts?q=${search}`)    
    if(!response.ok) throw new Error ('Siktir Serg jan!!!');
    return response.json();
}