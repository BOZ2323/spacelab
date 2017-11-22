module.exports = class block {
        constructor(name, img, xPos, yPos, xFill, yFill) {
            this.name = name;
            this.img = img;
            this.xPos = xPos;
            this.yPos = yPos;
            this.xFill = xFill;
            this.yFill = yFill;
            this.upDated = false;

            this.blockLeft = null;
            this.blockRight = null;
            this.blockUp = null;
            this.blockDown = null;

            this.setBlockNeighbors = function(left, right, up, down) {
                this.blockLeft = left;
                this.blockRight = right;
                this.blockUp = up;
                this.blockDown = down;
            }
            static create(person) {
                return new Person(person.id, person.name, person.age);
            }

        }