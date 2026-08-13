const Footer = () => {
    console.log("Footer Rendered!")
    return(
        <div className="footer">
            <p>footer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis accusamus mollitia deserunt eius.
            </p>
            <button onClick={() => alert("Subsribed!")}>Subscribe</button>
        </div>
    )
}

export default Footer;