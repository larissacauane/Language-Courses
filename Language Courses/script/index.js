function course () {
    let language_courses = [
        {name: "English", price: 2500, amount_hours: 160},
        {name: "Spanish", price: 1500, amount_hours: 110},
        {name: "French", price: 3600, amount_hours: 200},
        {name: "Chinese", price: 5500, amount_hours: 400},
        {name: "German", price: 3800, amount_hours: 230}
    ]

    for (let course of language_courses) {
        let course_name = course.name
        let course_price = course.price
        let course_amount_hours = course.amount_hours

        let price_amount_hours = course_price / course_amount_hours

        console.log(`Course name: ${course_name}`)
        console.log(`Course load: ${course_amount_hours} hours`)
        console.log(`Course price: ${course_price},00`)
        
        if (price_amount_hours >= 15) {
            console.log("Hour / class greater than or equal to R$ 15.00")
        } else {
            console.log("Hour / class less than R$ 15.00")
        }

        console.log("\n");
    }
}

course()