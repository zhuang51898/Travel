let defaultCity = '沛县'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default{
  city: defaultCity
}
