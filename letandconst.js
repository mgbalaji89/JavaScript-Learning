function main()
{
    const PI = Math.PI;
    const r = +(readLine());

    if ( r >0 && r<=100)
    {
        const radii = r.toFixed(3);
        let area = PI * Math.pow(radii,2);
        console.log(area);

        let perimeter = 2 * PI * radii;
        console.log(perimeter);
    }
}
main();
