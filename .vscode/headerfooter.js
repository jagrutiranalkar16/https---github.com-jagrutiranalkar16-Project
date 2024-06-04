class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<a href="#" class="logo"><i class="fas fa-seedling"></i>green</a>

        <nav class="navbar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="planttracker.html" target="_blank">Plant Care</a></li>
                <a href="https://www.example.com" target="_blank" style="color: red;">Link Text</a>
                <li><a href="Save Water">Save Water</a></li>
                
            </ul>
        </nav>
        `
    }
}
class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="box-container">
    
        <div class="box">
            <a href="#" class="logo"><i class="fas fa-seedling"></i>green</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus impedit voluptate fuga id sapiente perspiciatis amet eos esse iure.</p>
        </div>
    
        <div class="box">
            <h3 class="share">share</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">github</a>
        </div>
    
        
    </div>
    
        `
    }
}
customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)
