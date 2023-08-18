class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }
  get image() {
    return this.#image;
  }

  get author() {
    throw new Error("getAuthor() method must be implemented");
  }

  get testimonialHTML() {
    return `
        <div class="card-testimonial">
            <img src="${this.image}" alt="" />
            <p class="author">${this.author}</p>
            <p class="quote">${this.quote}</p>
        </div>
        `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Abel Dustin",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget metus euismod, convallis ex vel, hendrerit quam. Proin quis aliquam odio. Ut condimentum, enim nec elementum venenatis, dui diam sodales elit, porttitor auctor urna nisi sit amet elit. Maecenas aliquam fringilla quam quis tincidunt. Cras mollis ornare porta",
  "./image/gambar-coding.jpeg"
);
const testimonial2 = new AuthorTestimonial(
  "Cintara Surya",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget metus euismod, convallis ex vel, hendrerit quam. Proin quis aliquam odio. Ut condimentum, enim nec elementum venenatis, dui diam sodales elit, porttitor auctor urna nisi sit amet elit. Maecenas aliquam fringilla quam quis tincidunt. Cras mollis ornare porta",
  "./image/gambar-coding.jpeg"
);
const testimonial3 = new AuthorTestimonial(
  "Abdul Kodir",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget metus euismod, convallis ex vel, hendrerit quam. Proin quis aliquam odio. Ut condimentum, enim nec elementum venenatis, dui diam sodales elit, porttitor auctor urna nisi sit amet elit. Maecenas aliquam fringilla quam quis tincidunt. Cras mollis ornare porta",
  "./image/gambar-coding.jpeg"
);

const testimonial4 = new AuthorTestimonial(
  "Joko Slamet",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget metus euismod, convallis ex vel, hendrerit quam. Proin quis aliquam odio. Ut condimentum, enim nec elementum venenatis, dui diam sodales elit, porttitor auctor urna nisi sit amet elit. Maecenas aliquam fringilla quam quis tincidunt. Cras mollis ornare porta",
  "./image/gambar-coding.jpeg"
);

let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
