import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Guest } from '../data/guests';


type GuestTableProps = {
    guests: Guest[];
};

export function GuestTable({ guests }: GuestTableProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <TableContainer
            component={Paper}
            sx={{
                width: '100%',
                overflowX: 'auto',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
                '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
            }}
        >
            <Table
                sx={{
                    minWidth: { xs: 320, sm: 650 },
                    '& .MuiTableCell-root': {
                        px: { xs: 1, sm: 2 },
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        whiteSpace: 'nowrap',
                    },
                }}
                size={isMobile ? 'small' : 'medium'}
                aria-label="guest table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Table Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {guests.map((guest) => (
                        <TableRow key={String(guest.id)} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {guest.firstName}
                            </TableCell>
                            <TableCell>{guest.lastName}</TableCell>
                            <TableCell>{guest.tableNumber ?? '—'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
