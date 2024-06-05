import React from 'react'

const Bookshelf = () => {

    const [books, setBooks] = React.useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])

    const [newBook, setNewBook] = React.useState({
        title: ``,
        author: ``
    })

    function handleTitleInputChange(event) {
        const copyNewBook = structuredClone(newBook)
        copyNewBook.title = event.target.value
        setNewBook(copyNewBook)
    }

    function handleAuthorInputChange(event) {
        const copyNewBook = structuredClone(newBook)
        copyNewBook.author = event.target.value
        setNewBook(copyNewBook)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const copyBooks = structuredClone(books)
        copyBooks.push(newBook)
        setBooks(copyBooks)
        setNewBook({
            title: ``,
            author: ``
        })
    }

    return <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input
                placeholder='Book title'
                type='text'
                onChange={handleTitleInputChange}
                value={newBook.title}
                />
                <input
                placeholder='Author'
                type='text'
                onChange={handleAuthorInputChange}
                value={newBook.author}
                />
                <button>Add book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
                {books.map((book, index) => {
                    return <div key={index} className='bookCard'><p>{book.title}</p> - written by <p>{book.author}</p></div>
                })}
        </div>
    </div>

}
export default Bookshelf