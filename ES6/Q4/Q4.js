const container = document.querySelector("#container");


class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        return `(${this.x},${this.y})`;
    }

    equals(point) {
        if (this.x === point.x && this.y === point.y) return true;
        return false;
    }

    _3param(points, x, y) {
        return points.some(element => {
            if (element.x === x && element.y === y) return true;
            return false;
        });
    }

    _2param(points, point) {
        //checks if the point equals for at least one element in the array
        return points.some(element => element.equals(point));
    }

    trip(points) {
        let distance = 0;

        for (let i = 0; i < points.length - 1; i++) {

            distance += Math.sqrt((points[i].x - points[i + 1].x) ** 2 + (points[i].y - points[i + 1].y) ** 2);

        }

        return distance;
    }

}

p = new Point(1, 3);
console.log("Show function: ", p.show());

p1 = new Point(2, 3);
p2 = new Point(3, 3);
p3 = new Point(3, 4);

const pArr = [];
pArr.push(p);
pArr.push(p1);
pArr.push(p2);

console.log(pArr);
const result = p1._2param(pArr, p3);
console.log(result);


//for graphic points:
// Example points
const pointsArray = [
    new Point(1, 6),
    new Point(5, 6),
    new Point(6, 2),
    new Point(4, 1)
];

// Set up SVG container
const svg = d3.select("#graph");

// Draw dots
svg.selectAll("circle")
    .data(pointsArray)
    .enter().append("circle")
    .attr("cx", d => d.x * 50)
    .attr("cy", d => 400 - d.y * 50)
    .attr("r", 5)
    .attr("class", "point");

// Draw text for coordinates
svg.selectAll("text")
    .data(pointsArray)
    .enter().append("text")
    .attr("x", d => d.x * 50 + 10) // Adjust the offset as needed
    .attr("y", d => 400 - d.y * 50 - 10) // Adjust the offset as needed
    .text(d => `(${d.x},${d.y})`)
    .attr("class", "coordinate-text");

// Draw lines
svg.selectAll("line")
    .data(pointsArray)
    .enter().append("line")
    .attr("x1", (d, i) => i === pointsArray.length - 1 ? pointsArray[0].x * 50 : d.x * 50)
    .attr("y1", (d, i) => i === pointsArray.length - 1 ? 400 - pointsArray[0].y * 50 : 400 - d.y * 50)
    .attr("x2", (d, i) => i === pointsArray.length - 1 ? pointsArray[0].x * 50 : pointsArray[i + 1].x * 50)
    .attr("y2", (d, i) => i === pointsArray.length - 1 ? 400 - pointsArray[0].y * 50 : 400 - pointsArray[i + 1].y * 50)
    .attr("class", "line");

p = new Point(1, 3);
container.innerHTML += "the distance is: " + p.trip(pointsArray);
