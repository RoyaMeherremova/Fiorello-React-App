import React from 'react';
import '../../assets/scss/admin/_adminDashboard.scss';
import Sidebar from '../../components/admin/Sidebar';
import '../../assets/scss/_navigation.scss';
import Navbar from '../../components/admin/Navbar';

function AdminDashboard() {
    return (
        <div className="content-wrapper">
            <div className="d-flex">
                <Sidebar />
                <Navbar />
            </div>

            <div className="dashboard">
                <div className="row">
                    <div className="col-lg-8 mb-4 order-0">
                        <div className="card">
                            <div className="d-flex align-items-end row">
                                <div className="col-sm-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">Congratulations 🎉</h5>
                                        <p className="mb-4">
                                            You achieved <span className="fw-bold">72%</span> more sales today. Check your new badge in your profile.
                                        </p>
                                        <a href="#" className="btn btn-sm btn-outline-primary">View Badges</a>
                                    </div>
                                </div>
                                <div className="col-sm-5 text-center text-sm-left">
                                    <div className="card-body pb-0 px-0 px-md-4">
                                        <img
                                            src="/Admin/img/illustrations/man-with-laptop-light.png"
                                            height="140"
                                            alt="User with Laptop"
                                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                            data-app-light-img="illustrations/man-with-laptop-light.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 order-1">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between">
                                            <div className="avatar flex-shrink-0">
                                                <img src="/Admin/img/icons/unicons/chart-success.png" alt="Chart Success" className="rounded" />
                                            </div>
                                            <button className="btn p-0" type="button">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                        </div>
                                        <span className="fw-semibold d-block mb-1">Profit</span>
                                        <h3 className="card-title mb-2">$12,628</h3>
                                        <small className="text-success fw-semibold">
                                            <i className="bx bx-up-arrow-alt"></i> +72.80%
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between">
                                            <div className="avatar flex-shrink-0">
                                                <img src="/Admin/img/icons/unicons/wallet-info.png" alt="Wallet Info" className="rounded" />
                                            </div>
                                            <button className="btn p-0" type="button">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                        </div>
                                        <span>Sales</span>
                                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                                        <small className="text-success fw-semibold">
                                            <i className="bx bx-up-arrow-alt"></i> +28.42%
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                        <div className="card">
                            <div className="row row-bordered g-0">
                                <div className="col-md-8">
                                    <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                    <div id="totalRevenueChart" className="px-2"></div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body text-center">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button">
                                            2025
                                        </button>
                                    </div>
                                    <div id="growthChart"></div>
                                    <div className="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>

                                    <div className="d-flex justify-content-between p-4 gap-3">
                                        <div className="d-flex">
                                            <span className="badge bg-label-primary p-2 me-2">
                                                <i className="bx bx-dollar text-primary"></i>
                                            </span>
                                            <div>
                                                <small>2025</small>
                                                <h6 className="mb-0">$32.5k</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <span className="badge bg-label-info p-2 me-2">
                                                <i className="bx bx-wallet text-info"></i>
                                            </span>
                                            <div>
                                                <small>2025</small>
                                                <h6 className="mb-0">$41.2k</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                        <div className="row">
                            <div className="col-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between">
                                            <div className="avatar flex-shrink-0">
                                                <img src="/Admin/img/icons/unicons/paypal.png" alt="Payments" className="rounded" />
                                            </div>
                                            <button className="btn p-0" type="button">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                        </div>
                                        <span className="d-block mb-1">Payments</span>
                                        <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                                        <small className="text-danger fw-semibold">
                                            <i className="bx bx-down-arrow-alt"></i> -14.82%
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between">
                                            <div className="avatar flex-shrink-0">
                                                <img src="/Admin/img/icons/unicons/cc-primary.png" alt="Transactions" className="rounded" />
                                            </div>
                                            <button className="btn p-0" type="button">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                        </div>
                                        <span className="fw-semibold d-block mb-1">Transactions</span>
                                        <h3 className="card-title mb-2">$14,857</h3>
                                        <small className="text-success fw-semibold">
                                            <i className="bx bx-up-arrow-alt"></i> +28.14%
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                                <div className="card-title">
                                                    <h5 className="text-nowrap mb-2">Profile Report</h5>
                                                    <span className="badge bg-label-warning rounded-pill">Year 2025</span>
                                                </div>
                                                <div className="mt-sm-auto">
                                                    <small className="text-success text-nowrap fw-semibold">
                                                        <i className="bx bx-chevron-up"></i> 68.2%
                                                    </small>
                                                    <h3 className="mb-0">$84,686k</h3>
                                                </div>
                                            </div>
                                            <div id="profileReportChart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-backdrop fade"></div>
        </div>
    );
}

export default AdminDashboard;
