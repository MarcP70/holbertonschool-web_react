interface MajorCredits {
    credits: number;
    _brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    _brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MajorCredits'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MinorCredits'
    };
}

// Example usage and testing
const major1: MajorCredits = { credits: 30, _brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 20, _brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 15, _brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 10, _brand: 'MinorCredits' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajor.credits}`);  // Expected output: 50
console.log(`Total Minor Credits: ${totalMinor.credits}`);  // Expected output: 25
