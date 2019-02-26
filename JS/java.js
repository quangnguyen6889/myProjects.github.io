function giaithua(n){
	var giaiThua = 1
	// a = (n*(n-1))
	// console.log(a);
	for (i = 1; i <= n; i++) {
		giaiThua *=i
	}
	return giaiThua;
}