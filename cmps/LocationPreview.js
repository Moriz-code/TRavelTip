// class LocationPreview {
//     id = 1;
//     constructor(info, pos, weather) {
//         this.id = id++;
//         this.info = info;
//         this.pos = pos;
//         this.weather = weather;
//     }
// }

class LocationPreview {
    constructor(location) {
        this.location = location;
    }

    onDeleteLocation = () => {
        deleteBook(this.Location)
        renderMap();
    }

    onUpdate = () => {
        updateLocation(this.Location)
    }


    render() {
        const { book } = this.location;

        const elTr = document.createElement('tr');
        elTr.innerHTml = `<td>${book.id}</td>
            <td>${book.info}</td>
            <td>${book.weather}</td>
            <button class="update"> Update </button>
             <button class="delete"> delete </button>`

        elTr.querySelector('.update').onclick = this.onReadAndUpdateBook;
        elTr.querySelector('.delete').onclick = this.onDeleteBook;

        return elTr;
    }

}





