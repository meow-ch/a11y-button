declare const useFontOptions: () => readonly [{
    readonly value: string;
    readonly label: 0;
    readonly description: "From website";
}, {
    readonly value: "Arial";
    readonly label: "Arial";
    readonly description: "Standard sans-serif font";
}, {
    readonly value: "OpenDyslexic";
    readonly label: "OpenDyslexic";
    readonly description: "Designed for dyslexic readers";
}, {
    readonly value: "Atkinson Hyperlegible";
    readonly label: "Atkinson Hyperlegible";
    readonly description: "High legibility font";
}, {
    readonly value: "OpenSans";
    readonly label: "OpenSans";
    readonly description: "Good font font";
}, {
    readonly value: "Luciole";
    readonly label: "Luciole";
    readonly description: "Optimized for low vision";
}];
export default useFontOptions;
