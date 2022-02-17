export default function createKlasseID(gymnasiumID , klasse) {
    return gymnasiumID + klasse.trim().toUpperCase().replace(/[0-9]/g, '');
}