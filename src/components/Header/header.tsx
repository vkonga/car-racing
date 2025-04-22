import './header.css';

export default function Header() {

    return (
        <header>
                <nav className="nav-links">
                    <div className='content-container'>
                        <p className='line'>|</p>
                        <a href="#" className='content' >Home</a>
                    </div>
                    <div>
                        <p className='line'>|</p>
                        <a href="#" className='content'>Cars</a>
                    </div>

                    <div>
                        <p className='line'>|</p>
                        <a href="#" className='content'>Tracks</a>
                    </div>  

                    <div>
                        <p className='line'>|</p>
                        <a href="#" className='content'>About Us</a>
                    </div>

                    <div>
                        <p className='line'>|</p>
                        <a href="#" className='content'>Contact Us</a>
                    </div>
                </nav>
            
        </header>
    )
}