const getData = async(url)  => {
    const response = await fetch(url);
    if (response.ok){
        return response.json();
    } else {
        throw 'Error fetching url';
    }
};

export default getData;
