function generateID() {
    return (
        Math.floor(1000 + Math.random() * 9000) + " " +
        Math.floor(1000 + Math.random() * 9000) + " " +
        Math.floor(1000 + Math.random() * 9000)
    );
}
