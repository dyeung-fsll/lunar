// Copyright 2022 C.L. Danny Yeung
// JavaScript UTC Time of the kth New Moon since the 6th Jan 2000 one (k=0). Integer value of k gives a New Moon.
// Reference: Astronomical Algorithms by Jean Meeus 2nd Ed 1998. Chapter 49 Phases of the Moon.
// The expressions are based on Chapront's ELP-2000/82 theory for the Moon (with improved expressions for the arguments M, M', etc., as mentioned in Chapter 47), 
// and on Bretagnon's and Francou's VSOP87 theory for the Sun.

function newMoon (k){
    // let date = new Date('1 Jan 2000 12:00:00 GMT+0000')
    let date0 = new Date('6 Jan 2000 18:14:00 GMT+0000')
    const sind = (deg) => Math.sin(deg*Math.PI/180)
    const JDE0 = (k) => 2451550.09766 + 29.530588861*k + 0.00015437*(k/1236.85)**2 - 0.000000150*(k/1236.85)**3 + 0.00000000073*(k/1236.85)**4
    const T0 = (k) => (JDE0(k)- 2451545)/36525
    const jde = (k) => 2451550.09766 + 29.530588861*k + 0.00015437*T0(k)**2 - 0.000000150*T0(k)**3 + 0.00000000073*T0(k)**4
    const T = (k) => (jde(k)- 2451545)/36525
    const E = (k) => 1 - 0.002516*T(k) - 0.0000074*T(k)**2
    const M = (k) => 2.5534 + 29.10535670*k - 0.0000014*T(k)**2 - 0.00000011*T(k)**3    // Sun's mean
    const M1 = (k) => 201.5643 + 385.81693528*k + 0.0107582*T(k)**2 + 0.00001238*T(k)**3 - 0.000000058*T(k)**4
    const F = (k) => 160.7108 +390.67050284*k - 0.0016118*T(k)**2 - 0.00000227*T(k)**3 + 0.000000011*T(k)**4
    const Ohm = (k) => 124.7746 - 1.56375588*k + 0.0020672*T(k)**2 + 0.00000215**T(k)**3
    const d2r = Math.PI/180
    const NM1 = (k) => -0.40720 * sind(M1(k))
    const NM2 = (k) => +0.17241 * E(k) * sind(M(k))
    const NM3 = (k) => +0.01608 * sind(2*M1(k))
    const NM4 = (k) => +0.01039 * sind(2*F(k))
    const NM5 = (k) => +0.00739 * E(k) * sind(M1(k)-M(k))
    const NM6 = (k) => -0.00514 * E(k) * sind(M1(k)+M(k))
    const NM7 = (k) => +0.00208 * E(k)**2*sind(2*M(k))
    const NM8 = (k) => -0.00111 * sind(M1(k)-2*F(k))
    const NM9 = (k) => -0.00057 * sind(M1(k)+2*F(k))
    const NM10 = (k) => +0.00056 * E(k) * sind(2*M1(k)+M(k))
    const NM11 = (k) => -0.00042 * sind(3*M1(k))
    const NM12 = (k) => +0.00042 * E(k) * sind(M(k)+2*F(k))
    const NM13 = (k) => +0.00038 * E(k) * sind(M(k)-2*F(k))
    const NM14 = (k) => -0.00024 * E(k) * sind(2*M1(k)-M(k))
    const NM15 = (k) => -0.00017 * sind(Ohm(k))
    const NM16 = (k) => -0.00007 * sind(M1(k)+2*M(k))
    const NM17 = (k) => +0.00004 * sind(2*M1(k)-2*F(k))
    const NM18 = (k) => +0.00004 * sind(3*M(k))
    const NM19 = (k) => +0.00003 * sind(M1(k)+M(k)-2*F(k))
    const NM20 = (k) => +0.00003 * sind(2*M1(k)+2*F(k))
    const NM21 = (k) => -0.00003 * sind(M1(k)+M(k)+2*F(k))
    const NM22 = (k) => +0.00003 * sind(M1(k)-M(k)+2*F(k))
    const NM23 = (k) => -0.00002 * sind(M1(k)-M(k)-2*F(k))
    const NM24 = (k) => -0.00002 * sind(3*M1(k)+M(k))
    const NM25 = (k) => +0.00002 * sind(4*M1(k))
    const nmsum = (k) => NM1(k)+NM2(k)+NM3(k)+NM4(k)+NM5(k)+NM6(k)+NM7(k)+NM8(k)+NM9(k)+NM10(k)+NM11(k)+NM12(k)+NM13(k)+NM14(k)
                    +NM15(k)+NM16(k)+NM17(k)+NM18(k)+NM19(k)+NM20(k)+NM21(k)+NM22(k)+NM23(k)+NM24(k)+NM25(k)
    const A1 = (k) => 299.77 + 0.107408*k - 0.009173*T(k)**2 
    const A2 = (k) => 251.88 + 0.016321*k
    const A3 = (k) => 251.83 + 26.651886*k
    const A4 = (k) => 349.42 + 36.412478*k
    const A5 = (k) => 84.66 + 18.206239*k
    const A6 = (k) => 141.74 + 53.303771*k
    const A7 = (k) => 207.14 + 2.453732*k
    const A8 = (k) => 154.84 + 7.306860*k
    const A9 = (k) => 34.52 + 27.261239*k
    const A10 = (k) => 207.19 + 0.121824*k
    const A11 = (k) => 291.34 + 1.844379*k
    const A12 = (k) => 161.72 + 24.198154*k
    const A13 = (k) => 239.56 + 25.513099*k
    const A14 = (k) => 331.55 + 3.592518*k
    const C1 = (k) => 0.000325*sind(A1(k))
    const C2 = (k) => 0.000165*sind(A2(k))
    const C3 = (k) => 0.000164*sind(A3(k))
    const C4 = (k) => 0.000126*sind(A4(k))
    const C5 = (k) => 0.000110*sind(A5(k))
    const C6 = (k) => 0.000062*sind(A6(k))
    const C7 = (k) => 0.000060*sind(A7(k))
    const C8 = (k) => 0.000056*sind(A8(k))
    const C9 = (k) => 0.000047*sind(A9(k))
    const C10 = (k) => 0.000042*sind(A10(k))
    const C11 = (k) => 0.000040*sind(A11(k))
    const C12 = (k) => 0.000037*sind(A12(k))
    const C13 = (k) => 0.000035*sind(A13(k))
    const C14 = (k) => 0.000023*sind(A14(k))
    const csum = (k) => C1(k)+C2(k)+C3(k)+C4(k)+C5(k)+C6(k)+C7(k)+C8(k)+C9(k)+C10(k)+C11(k)+C12(k)+C13(k)+C14(k)
    const jdeAdj = (k) => jde(k) + nmsum(k) + csum(k)

return date0.valueOf() + (jdeAdj(k)-jdeAdj(0))*24*3600*1000 
}